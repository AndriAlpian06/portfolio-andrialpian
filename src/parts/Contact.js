import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className='pt-36 pb-32 bg-slate-100'>
        <div className='container'>
            <div className='w-full px-4'>
                <div className='max-w-xl mx-auto text-center mb-16'>
                    <h4 className='font-bold uppercase text-primary text-lg mb-3'>Kontak</h4>
                    <h2 className='font-bold text-dark text-3xl mb-4'>Hubungi Saya</h2>
                    <p className='font-medium text-base text-secondary'>Silahkan isi form di bawah ini jika anda ingin mengirim pesan kepada saya</p>
                </div>
            </div>

            <form action='https://getform.io/f/dc0f682a-fb98-4a3d-95ef-ae8969de9a19' method='POST'>
                <div className='w-full lg:w-2/3 lg:mx-auto'>
                    <div className='w-full px-4 mb-8'>
                        <label className='text-base font-bold text-primary'>Nama</label>
                        <input name="name" id="name" type="text" className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
                    </div>
                    <div className='w-full px-4 mb-8'>
                        <label className='text-base font-bold text-primary'>Email</label>
                        <input name="email" id="email" type="text" className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary' />
                    </div>
                    <div className='w-full px-4 mb-8'>
                        <label className='text-base font-bold text-primary'>Pesan</label>
                        <textarea id="pesan" type="text" name='message' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32'></textarea>
                    </div>
                    <div className="w-full px-4">
                        <button className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>
                        Kirim</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}
