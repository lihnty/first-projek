import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./../assets/front-end.jpg"
import jurusan2 from "./../assets/f.jpg"
import jurusan3 from "./../assets/menghafal.jpg"
import kegiatan1 from "./../assets/Cuplikan layar 2024-10-17 170052.png"
import kegiatan2 from "./../assets/a.jpg"
import kegiatan3 from "./../assets/Cuplikan layar 2024-10-17 170403.png"
const Maincontent = () => {
    return (
        <div>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                    <div className="row justify-content-center">
                            <div className="col-lg-4 col-12">
                                <Cardjurusan image={jurusan1} jurusan="Front end devoloper" title="bidang ini fokus membuat website tampilan"/>
                            </div>
                            <div className="col-lg-4 col-12">
                                <Cardjurusan image={jurusan2} jurusan="Foto grapyh" title="fokus untuk mengfoto foto kegiatan-kegiatan santri"/>
                            </div>
                            <div className="col-lg-4 col-12">
                                <Cardjurusan image={jurusan3} jurusan="menghafal Al-Qur'an" title="bidang ini fokus untuk mengejar target hafalan"/>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Kegiatan</h1>
                        </div>
                        <div className="col-12 my-3">
                            <Cardkegiatan image={kegiatan1} text="— di Universitas Muslim Indonesia (UMI) Makassar."/>
                        </div>
                        <div className="col-12 my-3" my-3>
                            <Cardkegiatan image={kegiatan2} text="kajian tiap malam Ahad"/>
                        </div>
                        <div className="col-12 my-3">
                            <Cardkegiatan image={kegiatan3} text="main futsal setiap awal bulan"/>
                        </div>
                    </div>
                   

                    
                     </div>
                </div>
            </div>
            
         
        
    )
}


export default Maincontent;