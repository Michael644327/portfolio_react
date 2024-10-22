const HomeSection3 = () => {
    const VideoEmbed = [
        { src: 'https://www.youtube.com/embed/9FwtGDVcSwQ?si=7P7mVaTPYoHEForj', name: '貓貓' },
        { src: 'https://www.youtube.com/embed/vTrLEhFObCc?si=FDnGCkaHBWOGvXQo', name: '狗狗' },
    ];

    return (
        <>
            <div className="container">
                <div className="row py-15">
                    <div className="col-12">
                        <h2 className="text-center py-5">本週精選影片</h2>
                    </div>

                    {VideoEmbed.map((v, i) => (
                        <div key={i} className="col-12 col-lg-6">
                            <div className="ratio ratio-16x9">
                                <iframe src={v.src} width="100%" height="400" title={v.name}></iframe>
                            </div>
                        </div>
                    ))}
                </div>            </div>
        </>
    )
}

export default HomeSection3;