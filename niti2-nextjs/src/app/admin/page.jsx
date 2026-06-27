'use client';
import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Loader2, X, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null });
  const [filterCategory, setFilterCategory] = useState('Semua');

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 1200);
  };
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Makanan Kering',
    price: '',
    stock: '',
    image: ''
  });

  const categories = ['Makanan Kering', 'Makanan Semi-Basah', 'Paket'];

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = filterCategory === 'Semua' 
    ? products 
    : products.filter(p => p.category === filterCategory);

  const handleOpenModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        description: product.description || '',
        category: product.category,
        price: product.price,
        stock: product.stock,
        image: product.image || ''
      });
    } else {
      setEditingProduct(null);
      setFormData({ name: '', description: '', category: 'Makanan Kering', price: '', stock: '', image: '' });
    }
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteConfirm({ show: true, id });
  };

  const confirmDelete = async () => {
    if (!deleteConfirm.id) return;
    try {
      await fetch(`/api/products/${deleteConfirm.id}`, { method: 'DELETE' });
      fetchProducts();
      setDeleteConfirm({ show: false, id: null });
      showNotification('Produk berhasil dihapus dari sistem 🗑️', 'success');
    } catch (error) {
      showNotification('Gagal menghapus produk', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingProduct ? `/api/products/${editingProduct.id}` : '/api/products';
    const method = editingProduct ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock)
        })
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchProducts();
        showNotification(editingProduct ? 'Sip! Perubahan produk berhasil disimpan ✨' : 'Yey! Produk baru berhasil masuk katalog 🚀', 'success');
      } else {
        const data = await res.json();
        showNotification(data.error || 'Gagal menyimpan produk', 'error');
      }
    } catch (error) {
      showNotification('Terjadi kesalahan server', 'error');
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      
      if (res.ok && data.url) {
        setFormData(prev => ({ ...prev, image: data.url }));
        // Tidak perlu notifikasi sukses untuk upload gambar agar tidak mengganggu
      } else {
        showNotification(data.error || 'Gagal mengunggah gambar', 'error');
      }
    } catch (error) {
      showNotification('Terjadi kesalahan saat mengunggah gambar', 'error');
    } finally {
      setUploadingImage(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 relative">
      
      {/* Centered Notification Modal */}
      {notification.show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/30 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center transform scale-100 transition-transform">
            <div className="flex justify-center mb-4">
              {notification.type === 'success' ? (
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
              ) : (
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-10 h-10 text-red-500" />
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {notification.type === 'success' ? 'Berhasil!' : 'Gagal!'}
            </h3>
            <p className="text-gray-600 font-medium">{notification.message}</p>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm.show && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Produk?</h3>
            <p className="text-gray-600 mb-6">Tindakan ini tidak dapat dibatalkan. Produk akan dihapus permanen dari sistem.</p>
            <div className="flex gap-3 justify-center">
              <button onClick={() => setDeleteConfirm({ show: false, id: null })} className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors">Batal</button>
              <button onClick={confirmDelete} className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors">Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Produk</h1>
          <p className="text-gray-500 text-sm">Kelola daftar oleh-oleh yang tampil di katalog.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-amber-800 text-white px-5 py-2.5 rounded-xl font-medium transition-colors"
        >
          <Plus className="w-5 h-5" />
          Tambah Produk
        </button>
      </div>

      {/* Categories Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['Semua', ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`whitespace-nowrap px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              filterCategory === cat 
              ? 'bg-brand-primary text-white shadow-sm' 
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-900 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-semibold">Produk</th>
                <th className="px-6 py-4 font-semibold">Kategori</th>
                <th className="px-6 py-4 font-semibold">Harga</th>
                <th className="px-6 py-4 font-semibold">Stok</th>
                <th className="px-6 py-4 font-semibold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-brand-primary mx-auto" />
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                    Tidak ada produk di kategori ini.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0">
                           {product.image ? (
                             <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No Img</div>
                           )}
                        </div>
                        <div className="font-medium text-gray-900">{product.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">Rp{product.price.toLocaleString('id-ID')}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => handleOpenModal(product)} className="text-brand-secondary hover:text-green-900 p-2 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteClick(product.id)} className="text-red-500 hover:text-red-700 p-2 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-gray-900">{editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Produk *</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                <textarea rows="3" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none"></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kategori *</label>
                  <select required value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white">
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stok *</label>
                  <input required type="number" min="0" value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Harga (Rp) *</label>
                <input required type="number" min="0" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama / Path Gambar</label>
                <div className="flex gap-2">
                  <input type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary outline-none" placeholder="/tempe.webp" />
                  <label className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-xl cursor-pointer border border-gray-200 transition-colors whitespace-nowrap">
                    {uploadingImage ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Upload Gambar'}
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium">Batal</button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-amber-800 text-white font-medium">Simpan Produk</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
