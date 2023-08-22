import { Component } from "react";
import "./App.css";
import { loadPost } from "./component/utils/load";
import { Post } from "./component/Posts";
import { TextInput } from "./component/textInput";

class App extends Component {
  state = {
    counter: 0,
    posts: [] ,
    searchValue: ""
  };
  

  async componentDidMount() {
    const postsAndphotos = await loadPost();
    this.setState({ posts: postsAndphotos })
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, searchValue } = this.state;
  
    // se tiver alguem coisa no searchValue eu quero q faca alguma acao  se nao alguma coisa
    const filteredPosts = !!searchValue ? 
    posts.filter(post => {
      // Transforma tudo em letra miniscula e contem
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    : 
    posts;

    return (
      <div>
        <section className="container">
          <div className="search-container">
            {!!searchValue && (
              <>
                  <h1>Search Value: {searchValue}</h1>
              </>
            )}
            
            <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
          </div>
            {filteredPosts.length > 0 && (
              <Post posts={filteredPosts} />  
            )}

            {filteredPosts.length === 0 && (
              <p>Não existe Post</p>
            )}

          <br/>
          <br/>
        </section>
      </div>
    );
  }
}

export default App;