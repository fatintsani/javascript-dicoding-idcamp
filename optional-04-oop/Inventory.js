/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

 class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    console.log(`Item ${item.name} added to inventory.`);
  }

  removeItem(id) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      const removedItem = this.items.splice(index, 1);
      console.log(`Item with ID: ${id} has been removed from inventory.`);
      return removedItem[0];
    } else {
      console.log(`Item with ID: ${id} not found.`);
      return null;
    }
  }

  listItems() {
    if (this.items.length === 0) {
      return "No items in inventory.";
    }
    return this.items.map(item => item.displayDetails()).join('\n');
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
