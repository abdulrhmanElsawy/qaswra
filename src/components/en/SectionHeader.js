import '../css/sectionheader.css';

function SectionHeader(props){
    return(
        <>
            <section className='section-header'>
                <div className='container-fluid'>
                    <div className='section-header-content'>
                        <div className='sec-header'>
                                <i class="las la-city"></i>
                                
                                <h2> {props.secheader} </h2>
                                <i class="las la-city"></i>
                        </div>

                        <h1> {props.header} </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionHeader;