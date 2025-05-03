import { poppins, quicksand, fredoka } from '@/app/ui/fonts';
import { NavigasiUtama } from '@/app/ui/dashboard/topnav';

export default function ProfilePage() {
  const profile = [
    {
      name: 'Evi Novita Gultom',
      image: '/profilevi.png', 
      text: 'Saya mahasiswa program studi Sistem Informasi angkatan 2023 dari Universitas Atma Jaya Yogyakarta. Maaf ya temanku stress semua kak.'
    },
    {
      name: 'Grace Ruby Carolina',
      image: '/profilolin.png',
      text: 'Saya Grace Ruby Carolina adik dari Jennie Ruby Jane, A.K.A Jennie Blackpink. sebenarnya saya jadi Idol tapi karena saya sayang teman teman saya makanya ikut bisnis toko kelontong awowkwkwkw. btw aku angkatan 2023 prodi SI Uajy'
    },
    {
      name: 'Vania Kim',
      image: '/profilvania.png',
      text: 'Saya vania sering di panggil sayang, saya mahasiswi Prodi Sistem Informasi akt 2023 di UAJY. Saya sedang magang di  toko kelontong pak Rangga. Honest review dari I pak rangga sih baik bgt sis'
    }
  ];

  return (
    <div className={`flex min-h-screen flex-col p-6 bg-yellow-100 text-black ${poppins.className} ${quicksand.className} ${fredoka.className}`}>
      <NavigasiUtama />
      <div className='flex justify-center mt-20 ml-7'></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {profile.map((p, index) => (
         <div key={index} className="bg-yellow-200 rounded-xl p-2 w-full max-w-md m-10">
         <div className="flex flex-col gap-2">
           <div className="bg-white rounded-md p-4 shadow-md m-2">
             <div className="flex items-center gap-3">
               {p.image ? (
                 <img
                   src={p.image}
                   alt={p.name}
                   width={100}
                   height={100}
                   className="rounded-md object-cover"
                 />
               ) : (
                 <div className="w-12 h-12 bg-gray-300 rounded-md" />
               )}
               <h2 className="font-bold text-xl">{p.name}</h2>
             </div>
           </div>
       
           <div className="bg-white rounded-md p-4 shadow-md flex flex-col justify-between min-h-[500px] m-2">
             <p className="text-xl">{p.text}</p>
             <div className="text-yellow-600 text-sm cursor-pointer mt-4">✏️</div>
           </div>
         </div>
       </div>
       
       
        ))}
      </div>
    </div>
  );
}
