const Home = {
    async render() {
      return `
      <article className="headline">
        <figure className="headline__figure">
         
        </figure>
        <div className="headline__content"> 
            <h4>Pencarian Kamar Rumah Sakit</h4>
            <p className="headline__description">Wesite ini dibuat untuk pencarian ruang rawat inap
            di Rumah Sakit</p>
            <button className="headline__button">Read More</button>
        </div>
      </article>

      <div className="statistik">
            <h3 className="statistik__title">Statistik Kasus Covid-19 di Indonesia</h3>
            <div className="statistik__list">
                <ul className="statistik__item">
                    <li>Kasus Terkonfirmasi</li>
                    <li>Sedang Dirawat</li>
                    <li>Berhasil Sembuh</li>
                    <li>Meninggal</li>
                </ul>
            </div>
        </div>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
export default Home;