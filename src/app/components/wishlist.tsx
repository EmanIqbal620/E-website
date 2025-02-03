import { useState, useEffect } from 'react';

// Define the structure of an item in the wishlist
interface WishlistItem {
  id: number;
  name: string;
}

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const addToWishlist = (item: WishlistItem) => {
    const updatedWishlist = [...wishlist, item];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <h2>My Wishlist</h2>
      <ul>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>

      <h3>Available Items</h3>
      <ul>
        {['Laptop', 'Smartphone', 'Headphones'].map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => addToWishlist({ id: index, name: item })}>Add to Wishlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
