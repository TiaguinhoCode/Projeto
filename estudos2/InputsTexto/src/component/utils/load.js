export const loadPost = async () => {
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

    return postsAndphotos;
}