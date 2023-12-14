const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Ciao Vue!',
      DischiList: [],
      apiUrl: "server.php",
      
    }
  },
  created(){
    axios.get(this.apiUrl)
    .then((resp) => 
    {
    this.DischiList = resp.data
    })
  },
 
}).mount('#app')
