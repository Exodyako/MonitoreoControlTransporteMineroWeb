import Mapa from "./../Mapa"
import CamioneroContainer from './../card/card-camionero/CamioneroContainer';

function MapaContainer(){
    return (  <div className="row" style={{margin:0}}>
    <div className="col-xl-6" style={{padding:0}}>
        <div className="card">
            {/* <div className="card-header">
                <i className="fas fa-chart-area me-1"></i>
                Mapa
            </div> */}
            <div  id='map-container' className="card-body ">
             <Mapa/>
            </div>
        </div>
    </div>
    <div className="col-xl-6" style={{padding:0}}>
      <CamioneroContainer/>                                  
    </div>
</div> )
};

export default MapaContainer;