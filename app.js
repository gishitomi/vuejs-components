var headerTemplate = `
    <div style="color: gray;">
        <slot name="header">No Title</slot>
    </div>
`;

var contentTemplate = `
    <div>
        <slot name="content">No Contents</slot>
    </div>
`;

Vue.component("page-header", {
  template: headerTemplate,
});
Vue.component("page-content", {
  template: contentTemplate,
});

new Vue({
  el: "#fruits-list",
});

Vue.component("user-login", {
  template: "#login-template",
  data: function () {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    loginBtn: function () {
      auth.login(this.id, this.password);
    },
  },
});

// ログイン試行のダミー
var auth = {
  login: function (id, password) {
    window.alert("userid: " + id + "\n" + "password: " + password);
  },
};

new Vue({
  el: "#login-example",
});
