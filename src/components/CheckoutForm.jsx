import { useContext, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { CartContext } from "../components/CartContext";
import { db } from "../firebase"; 


function CheckoutForm() {
  const { cartList, calcTotal, clear } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.email) {
      setError("Completa nombre y email.");
      return;
    }
    setLoading(true);
    setError(null);

    const order = {
      buyer,
      items: cartList.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
      total: calcTotal(),
      createdAt: serverTimestamp()
    };

    try {
      const ref = collection(db, "orders");
      const docRef = await addDoc(ref, order);
      setOrderId(docRef.id);
      clear();
    } catch (err) {
      setError("Error generando la orden. Intenta de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h3>¡Compra confirmada!</h3>
      <p>Tu id de orden es: <strong>{orderId}</strong></p>
      <p>Guardalo para seguimiento.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "1rem auto" }}>
      <h3>Checkout</h3>
      <input name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={buyer.email} onChange={handleChange} />
      <input name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} />
      <div style={{ marginTop: 10 }}>
        <button type="submit" disabled={loading}>{loading ? "Generando orden..." : "Confirmar compra"}</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default CheckoutForm;
