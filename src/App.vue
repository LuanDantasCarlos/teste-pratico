
<template>
    <div id="app">
      <div class="container">
        <header>
            <h1 class="title">Sobre o proficional</h1>
        </header>
        <div class="row">
        <div class="col-6">
            <h2>Dados do proficional</h2>
                <div class="form-grup">
                    <form @submit.prevent="addName">
                      <div class="fullname">
                        <label for="name">Nome completo*</label>
                        <input type="text" v-model="fullName" class="form-control" name="fullName" placeholder="Digite o nome completo">
                      </div>
                      <div class="cpf">
                        <label for="cpf">CPF*</label>
                        <input type="text" v-model="cpf" class="form-control smaller" name="cpf" placeholder="Digite um CPF">
                      </div>
                      <div class="telphone">
                        <label for="phone">Número de celular*</label>
                        <input type="tel" v-model="tel" class="form-control smaller" name="phone" placeholder="(00) 0000-0000">
                      </div>

                        <div class="row">
                            <div class="col">
                                <label for="estado">Estado*</label>
                                <select class="form-select form-control" v-model="estado" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1"></option>
                                    <option value="2"></option>
                                    <option value="3"></option>
                                  </select>
                            </div>
                            <div class="col">
                                <label for="cidade">Cidade*</label>
                                <select class="form-select form-control" v-model="cidade" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                            </div>
                          </div>
                            <div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="pages">1 de 2</p>
                        <button type="submit" class="btn form-control"><a href="../src/views/payPage.vue">Proximo</a></button>
                    </form>
                </div> 
            </div>
              <img src="../src/assets/desktop-pagina-1.png" alt="imgPage1">      
        </div>  
    </div>
         
  </div>
</template>

<script>
export default {
  name: "app" ,
  data() {
    return {
      fullNames: null,
      cpfs: null,
      tels: null,
      estados: null,
      cidades: null,
      fullName: null,
      cpf: null,
      tel: null,
      estado: null,
      cidade: null,
    };
  },
  methods: {
    async getEstados() {
      const req = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/distritos")
      const data = await req.json();

     // this.estados = data.estados;
     // this.cidades = data.cidades;

      console.log(data)

    }
  }
};
</script>

<style>
body {
    background-color: #ffe766;
}
 /* geral */
* {
    font-family: 'Open Sans', sans-serif;
}

.title {
    font-family: 'Comfortaa', cursive;
    font-weight: bolder;
}

.form-control {
    border: 1px solid  #483984;
    height: 45px;
}
/* page 1 */
.container {
    background-color: #ffffff;
    width: 1000px;
    height: 750px;
    margin-top: 100px;
    border-radius: 20px;
    box-shadow: 5px 5px 9px #8A8A8A;
}

header {
    padding-top: 20px;
    padding-left: 20px;
}

header h1 {
    color: #483984;
    font-size: 40px;
}

.row {
    align-items: center;
}

img {
    float: right;
    width: 48%;
}

.col-6 {
    margin-right: 0;
    height: 700px;
    margin-left: 10px;
}

.col-6 h2 {
    font-size: 27px;
    padding-top: 20px;
    padding-left: 20px;
    font-weight: bolder;
}

.col {
    margin-right: 0;
    padding-top: 10px;
    margin-left: 10px;
}

.col select {
    margin: auto;
    width: 100%;
    height: 45px;
}

.fullname, .cpf, .telphone{
  margin: 20px;  
}

.smaller{
    width: 70%;
}

.progress {
    margin-top: 50px;
    margin-bottom: 20px;
    width: 90%;
    background-color: #483984;
}

.btn {
  background-color: #483984;
  border-radius: 20px;
  width: 90%;
  height: 90%;
}

</style>
