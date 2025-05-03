'use client';

import React, { useState } from "react";
import { poppins, quicksand, fredoka } from '@/app/ui/fonts';

export default function Detailproduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex min-h-screen flex-col p-6 bg-yellow-100 text-black items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-10 w-full max-w-4xl flex flex-row items-center gap-10">
        <div className="w-1/3 flex justify-center">
          <img
            src="a"
            alt="berikan gambar produk"
            className="object-contain w-40"
          />
        </div>

        <div className="w-2/3 space-y-4">
          <div>
            <p className={`${quicksand.className} font-semibold`}>Nama Produk :</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama produk"
              className={`w-full border border-black rounded px-3 py-2 text-black placeholder-gray-500 ${poppins.className}`}
            />
          </div>

          <div>
            <p className={`${quicksand.className} font-semibold`}>Harga :</p>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Masukkan harga"
              className={`w-full border border-black rounded px-3 py-2 text-black placeholder-gray-500 ${quicksand.className}`}
            />
          </div>

          <div>
            <p className={`${quicksand.className} font-semibold`}>Kategori :</p>
            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`w-full border border-black rounded px-3 py-2 ${
              category === "" ? "text-gray-500" : "text-black"
            } ${fredoka.className}`}
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
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Masukkan deskripsi produk"
              className={`w-full border border-black rounded px-3 py-2 text-black placeholder-gray-500 ${fredoka.className}`}
            />
          </div>

          <div className="flex justify-end space-x-4 pt-2">
            <button onClick={() => window.location.href = '/admin/produk'} className={`bg-red-600 text-white rounded-full px-6 py-2 hover:bg-red-500 ${fredoka.className}`}>
              Batal
            </button>
            <button className={`bg-green-500 text-white rounded-full px-6 py-2 hover:bg-green-600 ${fredoka.className}`}>
              Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
