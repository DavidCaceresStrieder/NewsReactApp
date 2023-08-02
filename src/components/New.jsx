export const New = (notice = undefined) => 
{
    const { author , content, description , publishedAt , title, url, urlToImage } = notice.notice;    
    const dateFixed = new Date(publishedAt).toGMTString();

    return (
        <div className="card text-bg-dark mb-3"> 
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={ urlToImage } className="img-fluid rounded-start" style={{ maxWidth:250 , maxHeight: 250 , margin:'30px auto' , display : 'block' }} />  
                </div>
                <div className="col-md-9">
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <hr />
                    <p className="card-text" style={{height : '100px'}}>{ description }</p>
                    <hr />

                    <div className="row">                    
                        <div className="col-10">
                            <p className="card-text"><small className="text-body-secondary">{ dateFixed } - { author ?? 'No Source' }</small></p>
                        </div>
                        <div className="col-2">
                            <a href={url}>Leer mas...</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
