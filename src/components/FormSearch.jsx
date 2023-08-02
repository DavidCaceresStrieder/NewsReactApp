import { useForm } from "../hooks"

export const FormSearch = ({ Search }) =>
{
    const { formState, onInputChange, onResetForm } = useForm({
        from : '',
        to : '',
        searchCriteria : ''
    });

    return (
        <>            
            <div className="row" style={{margin:"50px"}}>                
                <div className="col-9">
                    <div className="row">
                        <div className="col-3">
                            Desde: 
                            <input name="from" className="form-control" value={ formState.from } onChange={ onInputChange } type="date" ></input>
                        </div>
                        <div className="col-3">
                            Hasta: 
                            <input name="to" className="form-control" value={ formState.to } onChange={ onInputChange } type="date"></input>
                        </div>
                        <div className="col-3">
                            Busqueda: 
                            <input name="searchCriteria" className="form-control" value={ formState.searchCriteria } onChange={ onInputChange } type="text"></input>
                        </div>

                    </div>               

                    <div style={{marginTop:"10px"}}>
                        <button className="btn btn-dark" onClick={() => Search(formState)}>
                            Buscar
                        </button>

                        <button className="btn btn-secondary" onClick={ () => onResetForm() }>
                            Limpiar
                        </button>     

                    </div>
                </div>
            </div>
        </>
    )
}
