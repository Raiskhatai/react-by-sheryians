# in short

input mey direct hume kuch nhi likhna chahiye hume react ka use karke likhne chahiye
uska tarika:-
input se value lo wah value useState set ki madad se waps input ki value me dedo .

# Double binding (Two-way data binding)

Two-way / double binding ka matlab hota hai:

State change hogi → UI update
UI (input) change hoga → State update
React me hum manually input ko state se connect karte hain:

Input ka value = state se aata hai
Input change hone pe = hum khud state update karte hain

Isko log loosely two-way binding bol dete hain,
but actually ye controlled approach hota hai.

Maan lo input box me likha: "Rais"
1️ User ne input me Rais likha
2️ Event chala (on change)
3️ State update hui = "Rais"
4️ UI re-render hua
5️ Input box me "Rais" dikh raha hai
