import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    posts: [] 
  };
  

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async ()  => {
    // Requisição da API
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");
    
    // varias requisicoes
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    // Transforma em JSON 

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    // Zip que vai ser mapeamento
    const postsAndphotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    this.setState({ posts: postsAndphotos })
  }

  render() {
    const { posts } = this.state;


    return (
      <div>
        <section className="container" >
          <div className="post_grid">
            {posts.map(post => (
              <div className="post">
                <img src={post.cover} alt={post.title}/>
                <div key={post.id} className="postContent">
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              </div>
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;