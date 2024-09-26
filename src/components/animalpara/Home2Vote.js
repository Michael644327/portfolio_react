import Birds from "./data/birds.json"

const HomeSection2 = () => {
    return (
        <>
            <div className="row pb-5">
                <div className="col-12">
                    <h2 className="text-center py-5">鳥兒人氣投票</h2>
                </div>
                {Birds.map((v, i) => (
                    <div key={i} className="col-12 col-lg-6 col-xl-3 hover-icon">
                        <div className="bg-info rounded p-2 bg-opacity-25">
                            <img src={v.src} width="100%" alt={v.alt} />
                            <p className="text-center">
                                <i className={`bi bi-${v.id}-circle hover-0`}></i><i className={`bi bi-${v.id}-circle-fill hover-1`}></i>{v.name}
                                
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomeSection2;