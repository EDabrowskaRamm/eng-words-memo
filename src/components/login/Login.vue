<template lang="html">
  <div class="container">
    <Form/>
  </div>
</template>

<script>
import Form from '../../shared/Form'

export default {
  components: {
    Form
  }
}
</script>

<style lang="scss" scoped>
.container {
  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: white;
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.26);
    h3 {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .form-group {
      margin-bottom: 1.5rem;
      .fa {
        font-size: 1.4rem;
        padding-right: .75rem;
      }
    }
  }


  //mobile
  @media(min-width: 767px) {
    .container {
      display: flex;
      justify-content: center;
      form {
        width: 481px;
      }
    }
  }

}
</style>
