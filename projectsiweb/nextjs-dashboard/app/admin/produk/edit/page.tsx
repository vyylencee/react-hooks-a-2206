'use client';

import React, { useState } from "react";
import { poppins, quicksand, fredoka } from '@/app/ui/fonts';

export default function EditProduct() {
  const [name, setName] = useState("Ultra Milk Susu UHT Full Cream 250 ml");
  const [price, setPrice] = useState("Rp 8.500");
  const [category, setCategory] = useState("Minuman");
  const [description, setDescription] = useState(
    `Ultra Milk merupakan susu dengan kandungan protein tinggi dan memiliki khasiat yang banyak.`
  );

  return (
    <div className="flex min-h-screen flex-col p-6 bg-yellow-100 text-black items-center justify-center">
      <div className="flex bg-white rounded-xl shadow-md p-8 w-full max-w-4xl gap-8">
        <div className="flex justify-center items-center w-1/2">
          <img
            src="/ultra.png"
            alt=""
            className="w-80 object-contain"
          />
        </div>

        <div className="w-1/2 space-y-4">
          <div>
            <p className={`${quicksand.className} font-semibold`}>Nama Produk :</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full border border-black rounded px-2 py-1 text-black placeholder-gray-500 ${poppins.className}`}
            />
          </div>

          <div>
            <p className={`${quicksand.className} font-semibold`}>Harga :</p>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={`w-full border border-black rounded px-2 py-1 text-black placeholder-gray-500 ${poppins.className}`}
            />
          </div>

          <div>
            <p className={`${quicksand.className} font-semibold`}>Kategori :</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full border border-black rounded px-2 py-1 ${category === "" ? "text-gray-500" : "text-black"} ${fredoka.className}`}
            >
              <option value="" disabled hidden>
                Pilih kategori
              </option>
              <option value="Minuman">Minuman</option>
              <option value="Makanan">Makanan</option>
              <option value="Kebutuhan Rumah">Kebutuhan Rumah</option>
              <option value="Kebersihan">Kebersihan</option>
              <option value="Ibu dan Anak">Ibu dan Anak</option>
            </select>
          </div>

          <div>
            <p className={`${quicksand.className} font-semibold`}>Deskripsi :</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className={`w-full border border-black rounded px-2 py-1 text-black placeholder-gray-500 ${poppins.className}`}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button onClick={() => window.location.href = '/admin/produk'} className={`bg-red-600 text-white rounded-full px-6 py-2 hover:bg-red-500 ${fredoka.className}`}>
              Batal
            </button>
            <button className={`bg-yellow-400 text-black rounded-full px-6 py-2 hover:bg-yellow-500 ${fredoka.className}`}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
