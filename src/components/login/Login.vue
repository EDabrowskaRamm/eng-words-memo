<template lang="html">
  <div class="container">
    <form>
      <h3>Log in</h3>
      <div class="form-group">
        <i class="fa fa-user" aria-hidden="true"></i>
        <NameInput/>
      </div>
      <div class="form-group">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <PassInput/>
      </div>
    </form>
  </div>
</template>

<script>
import NameInput from '../../shared/NameInput'
import PassInput from '../../shared/PassInput'
// import EmailInput from '../../shared/EmailInput'

export default {
  components: {
    NameInput,
    PassInput
    // EmailInput
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
