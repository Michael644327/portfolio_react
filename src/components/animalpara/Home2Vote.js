const HomeSection2 = () => {
    const VoteBirds = [
        { src: '/img/animalpara/0422_bird_01.png', name: '和尚鸚鵡', alt: '和尚鸚鵡' },
        { src: '/img/animalpara/0422_bird_02.png', name: '七彩文鳥', alt: '七彩文鳥' },
        { src: '/img/animalpara/0422_bird_03.png', name: '鴿子', alt: '鴿子' },
        { src: '/img/animalpara/0422_bird_04.png', name: '金翅雀', alt: '金翅雀' },
    ];

    return (
        <>
            <div class="row pb-5">
                <div class="col-12">
                    <h2 class="text-center py-5">鳥兒人氣投票</h2>
                </div>
                {VoteBirds.map((v, i) => (
                    <div key={i} class="col-12 col-lg-6 col-xl-3 hover-icon">
                        <div class="bg-info rounded p-2 bg-opacity-25">
                            <img src={v.src} width="100%" alt={v.alt} />
                            <p class="text-center">
                                <i class="bi bi-1-circle hover-0"></i><i class="bi bi-1-circle-fill hover-1"></i>{v.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomeSection2;