import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    login(){
      let user=this.get('username');
      let pass=this.get('password');
      if(user=="Lex3960" && pass==="123123"){
        console.log("You're in");
        this.transitionToRoute('auth.products');
      }
      else {
        console.log("You shall not pass");
      }
    }
  }
});
