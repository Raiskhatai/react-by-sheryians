# install react-router-dom

command :- npm i react-router-dom

# important note -

cd karke current file mey jakar he react router install karke

# main.jsx ka code -

import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
<BrowserRouter>
<App />
</BrowserRouter>,
);

# App.jsx ka code -

import { Route, Routes } from "react-router";

 <!-- <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

# dynamic routing
        /*this is called dynamic routing */
        <Route path="/contact/:id" element={<Detail />} />  
/*yeh Route ke path mey /contact/ ke aage :id di hey yeh id object ki key hey jo hum use kar rhey agar koi contact / ke aage kuch bhi likhega wah id ke value mey jayega or wah element={} jo bhi page diya hua hoga wah is page par chala ayega :id ki jagah kuch or bhi name de sakte hey bas : iske aage likhna hey*/

# 4O4 
/* 4O4 */
/*agar koi page url ke aage kuch galat likh de to wah is page par chala jayega isme humne path ke aage * diya hey iska matlab koi bhi url aage kuch bhi galat likhey wah is page pe aa jaye */

        <Route path="*" element={<Notfound />} />
      </Routes> -->

# for nested routing -

<!-- <Router > imp. tag inke andar route tags aate hey
<Route path="jis page ke andar or pages links chahiye " element={<Product>}>
    <Route path="/product/man" element={<Man />} />     // wah tags jinko andar link karna hey
    <Route path="/product/woman" element={<Woman />} /> // wah tags jinko andar link karna hey
</Route>
</Router>
-->

 <!-- 
 <Router>
 <Route path="/product" element={<Product />}>
          <Route path="/product/man" element={<Man />} />
          <Route path="/product/woman" element={<Woman />} />
          <Route path="/product/kid" element={<Kids />} />
</Route> 
</Router>
-->

# links

import {Link} from "react-router-dom";

<!-- /* <Link to="/">home<Link>*/--> yaha anchor tag <a> ki tarah hey
<!--
      <div className="page-link gap-6 flex">
        <Link to="/" >home</Link>
        <Link to="/about" >about</Link>
        <Link to="/contact" >contact</Link>
        <Link to="/product" >product</Link>
      </div> -->

# useNevigate

import { useNavigate } from "react-router-dom";

  <!-- let nevigate = useNavigate(); -->    useNevigate()

 <!-- return  -->
 <!-- <div className="flex flex-col">
      <button
        className="w-40 h-10 bg-amber-400 m-2 rounded-2xl text-xl text-black font-bold capitalize cursor-pointer"
        onClick={() => {
          nevigate("/");        /*nevigate link to redirect to home page*/
        }}
      >
        return home
      </button>

      <button
        className="w-30 h-10 bg-amber-400 m-2 rounded-2xl text-xl text-black font-bold capitalize cursor-pointer"
        onClick={() => {
          nevigate(-1);         /*link for just back*/
        }}
      >
        back
      </button>

      <button
        className="w-30 h-10 bg-amber-400 m-2 rounded-2xl text-xl text-black font-bold capitalize cursor-pointer"
        onClick={() => {
          nevigate(+1);         // link for next
        }}
      >
        next
      </button> -->

use nevigate ka use direct first(home) page par jane ke liye ya direct last page par jane ke liye kiya jata or iska use just back page ya just next page ke liye bhi hota hey matlab jis page se abhi aaye hey (back) page .
