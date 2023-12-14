const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Ciao Vue!',
      dischiList: [],
      apiUrl: "server.php",
      
    }
  },
  created(){
    axios.get(this.apiUrl)
    .then((resp) => 
    {
    this.dischiList = resp.data
    })
  },
 
}).mount('#app')
