(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[46],{772:function(e,t,a){"use strict";a.r(t);var n=a(67),l=a(68),r=a(70),s=a(69),o=a(1),c=a.n(o),i=a(14),m=a(42),u=a(100),p=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={loading:!1,email:"",password:""},l}return Object(l.a)(a,[{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onTapLogin",value:function(){var e=this;this.setState({loading:!0});var t=this.state,a=t.email,n=t.password;u.a.post("users/signin",{login_id:a,password:n}).then((function(t){e.setState({loading:!1});var a=t.data.user;localStorage.setItem("sample_token",t.data["auth-token"]),localStorage.setItem("user",JSON.stringify(a)),-1==a.role?e.props.history.push("/admin"):e.props.history.push("/")})).catch((function(t){console.log(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state.loading;return c.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},c.a.createElement(i.w,null,c.a.createElement(i.vb,{className:"justify-content-center"},c.a.createElement(i.u,{md:"8"},c.a.createElement(i.m,null,c.a.createElement(i.j,{className:"p-4"},c.a.createElement(i.k,null,c.a.createElement(i.I,null,c.a.createElement("h1",null,"Login"),c.a.createElement("p",{className:"text-muted"},"Sign In to your account"),c.a.createElement(i.U,{className:"mb-3"},c.a.createElement(i.W,null,c.a.createElement(i.X,null,c.a.createElement(m.a,{name:"cil-user"}))),c.a.createElement(i.R,{type:"text",placeholder:"Username",autoComplete:"username",value:this.state.email,onChange:function(t){return e.onEmailChange(t)}})),c.a.createElement(i.U,{className:"mb-4"},c.a.createElement(i.W,null,c.a.createElement(i.X,null,c.a.createElement(m.a,{name:"cil-lock-locked"}))),c.a.createElement(i.R,{type:"password",placeholder:"Password",autoComplete:"current-password",value:this.state.password,onChange:function(t){return e.onPasswordChange(t)}})),c.a.createElement(i.vb,null,c.a.createElement(i.u,{xs:"6"},c.a.createElement(i.f,{color:"primary",className:"px-4",onClick:function(){e.onTapLogin()}},"Login",t&&c.a.createElement("span",{className:"spinner-border spinner-border-sm ml-1",role:"status","aria-hidden":"true"}))),c.a.createElement(i.u,{xs:"6",className:"text-right"},c.a.createElement(i.f,{color:"link",className:"px-0",onClick:function(){e.props.history.push("/forgot")}},"Forgot password?")))))),c.a.createElement(i.j,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},c.a.createElement(i.k,{className:"text-center"},c.a.createElement("div",null,c.a.createElement("h2",null,"Thanks for visit"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))))))))}}]),a}(o.Component);t.default=p}}]);
//# sourceMappingURL=46.b89abf06.chunk.js.map