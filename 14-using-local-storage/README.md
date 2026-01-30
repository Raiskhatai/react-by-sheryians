# what is local-storage

local storage browser ki memory hoti hey.
small size ke data ko store karane ke liye hum local storage ka use karte hey .

1.example - kisi website par hum dark mode use karte hey feer kaam hone ke baad browser ko band kar dete jab hum waps se browser ko on karte hey tab wah dark mode on he hota hey pahle se kyu uski yeh setting browser mey store kar di gyi hey.

2.example - kisi website par login karte hey or logout kare bina nikal jate hey tab bhi browser login store kar leta hey feer hum jab browser ko on karte hey tab bhi wah login he milta hey.

# 1. how to store data in local storage

local storage mey data key value pair mey store hoti hey jese object karta hey wese .
code : localStorage.setItem("key","value");
ab yeh data local storage par store ho gaya hey
ab agar hum code ko delete kar de feer bhi data local storage par store rahega.

# 2. how to get data from local storage

agar data get karna he to hum write karenge code mey localStorage.getItem("key").
ex- let otheruser=localStorage.getItem("user");
isme hum sirf key likhte hey.

# 3. how to remove item from local storage

agar local storage se single single value ko delete karna hey to hum use karenge
code: localStorage.removeItem("key");

# 4. how to delete (clear) full local storage

code for removing whole local storage is :
localStorage.clear();

# 5. how to save object,array in local storage

for storing object in local storage we use this code
localStorage.setItem("key",JSON.stringify(value));

hum value ko sirf string ki form mey he store kar sakte hey local storage mey is hum
JSON.stringfy ka use karte hey stringify yeh value ko stirng ki form mey store karta hey.

# 6. how to get saved object,array from local storage

jab hum local storage se data get karte hey wah data string ki form mey aata hey iske use normal form mey lane ke liye hum use karte hey :
JSON.parse(localStorage.getItem("key"));
ex:-let getobj=JSON.parse(localStorage.getItem("user"));

# what is session storage

session storage ke data jab tak rahta hey jab tak hum browser ko on rakhey browser se nikalte hey data delete ho jata hey .

# for clear whole session storage

sesssionStorage.clear();
