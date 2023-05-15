import { EleventyEdge } from "https://cdn.11ty.dev/edge@2.0.2/eleventy-edge.js";

const precompiledAppData = { "eleventy": { "compatibility": ">=2" },
"buildTimeData": {
  "ELEVENTYEDGEDATA_6fb538d672ea5051d66c76436b6711d4dd79f677bd145d23a1ed51cc2c1d85e7": {
    "loginform": "\n\n<aside id=\"login\" class=\"container\">\n  <form id=\"login-form\" class=\"card text-center\">\n    <h2>Join or Login</h2>\n    <div id=\"login-fields\" class=\"form-group-inline\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" name=\"email\" id=\"email\" required>\n      <button type=\"submit\" class=\"button\">Get Magic Link</button>\n    </div>\n    <p id=\"login-message\"></p>\n  </form>\n  \n<p class=\"text-center\">Check out this <a href=\"/posts/post-preview/\">post preview</a>!</p>\n\n</aside>\n\n\n<script src=\"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.22.0/dist/umd/supabase.min.js\"></script>\n<script>\n  const { createClient } = supabase;\n\nconst _supabase = createClient(\n  \"https://mucwdiuahrghiweygzcr.supabase.co\",\n  \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11Y3dkaXVhaHJnaGl3ZXlnemNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNjgzODksImV4cCI6MTk5OTc0NDM4OX0.UPrVseZ0p8XzFP6zOYs9jVIDzOU2GuZwb_pEx3XD1U8\"\n);\n  const loginForm = document.getElementById('login');\nconst loginFields = document.getElementById('login-fields');\nconst loginMessage = document.getElementById('login-message');\nconst loginSubmit = loginForm.querySelector('button');\n\nconst loginUser = (email) => {\n  _supabase.auth\n    .signInWithOtp({\n      email,\n      options: {\n        emailRedirectTo:\n          window.location.origin + '/session/?redirect=' + window.location.href,\n      },\n    })\n    .then((response) => {\n      loginFields.remove();\n\n      if (!response.error) {\n        loginMessage.innerText =\n          'Check your email for your \"magic link\" to continue your login.';\n      } else {\n        loginMessage.innerText =\n          'Oops! You recently tried to login. Please check your email for your \"magic link\". Or, try again in a minute.';\n      }\n\n      loginMessage.setAttribute('tabindex', '-1');\n      loginMessage.focus();\n    });\n};\n\nloginForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  // Disable clicks but not the button to prevent losing screen reader/keyboard focus\n  loginSubmit.classList.add('disabled');\n  loginSubmit.addEventListener('click', (e) => e.preventDefault);\n\n  const email = document.getElementById('email').value;\n  loginUser(email);\n});\n\n</script>\n"
  },
  "ELEVENTYEDGEDATA_0e62cda431a7502ae8ae7e63be1fe698beaee418007aeeb713c5b8b779fc0ce2": {
    "supabaseCDN": "\n    \n<script src=\"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.22.0/dist/umd/supabase.min.js\"></script>\n    ",
    "signoutScript": "\n    const { createClient } = supabase;\n\nconst _supabase = createClient(\n  \"https://mucwdiuahrghiweygzcr.supabase.co\",\n  \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11Y3dkaXVhaHJnaGl3ZXlnemNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNjgzODksImV4cCI6MTk5OTc0NDM4OX0.UPrVseZ0p8XzFP6zOYs9jVIDzOU2GuZwb_pEx3XD1U8\"\n);\n    const signOut = document.getElementById('signout');\n\nsignOut.addEventListener('click', async () => await _supabase.auth.signOut());\n\n_supabase.auth.onAuthStateChange((event) => {\n  if (event == 'SIGNED_OUT') {\n    window.location = '/signout/';\n  }\n});\n\n    "
  }
},
"nunjucksPrecompiled": {
  "EleventyEdgeNunjucksPrecompile:a2165cc5c356e597786d505bc2d4920661cc5c7b8ef94c08bcea5c1ffa95f5e4": (function() {function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "isUser")) {
output += "\n  <aside class=\"section text-center\">\n    <a href=\"/posts/\" class=\"button button--large\">Posts Archive</a>\n  </aside>\n";
;
}
else {
output += "\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "loginform")), env.opts.autoescape);
output += "\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
}()),
"EleventyEdgeNunjucksPrecompile:ea6a82ae27a7d0c0e6505276f36c218ce7d9680c15bd4bae75f20871546b5c9e": (function() {function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "isUser")) {
output += "\n      ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "supabaseCDN")), env.opts.autoescape);
output += "\n      <script>\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "signoutScript")), env.opts.autoescape);
output += "\n      </script>\n    ";
;
}
output += "\n    ";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
}()),
} };

export { EleventyEdge, precompiledAppData }