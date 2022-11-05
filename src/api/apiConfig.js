const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '06f56cfaf9020b41df3b981626532192',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;