import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Ajouterchef from "./Ajouterchef";
import Modifierchef from "./Modifierchef";
import Surrprimerchef from"./Surrprimerchef";
import Addservice from"./Addservice";
import Reservation from"./Reservation";
import Ajoutres from"./Ajoutres";
function Template(){
return(

<div>
<header id="header" className="header fixed-top d-flex align-items-center">

<div className="d-flex align-items-center justify-content-between">
  <a href="index.html" className="logo d-flex align-items-center">
    
    <span className="d-none d-lg-block">Protrio</span>
  </a>
  <i className="bi bi-list toggle-sidebar-btn"></i>
</div>

<div className="search-bar">
  <form className="search-form d-flex align-items-center" method="POST" action="#">
    <input type="text" name="query" placeholder="rechercher" title="Enter search keyword"></input>
    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
  </form>
</div>

<nav className="header-nav ms-auto">
  <ul className="d-flex align-items-center">

    <li className="nav-item d-block d-lg-none">
      <a className="nav-link nav-icon search-bar-toggle " href="#">
        <i className="bi bi-search"></i>
      </a>
    </li>

    <li className="nav-item dropdown">

      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
          <hr className="dropdown-divider"></hr>
        </li>

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"></hr>
        </li>

        <li className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Atque rerum nesciunt</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"></hr>
        </li>

        <li className="notification-item">
          <i className="bi bi-check-circle text-success"></i>
          <div>
            <h4>Sit rerum fuga</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>2 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"></hr>
        </li>

        <li className="notification-item">
          <i className="bi bi-info-circle text-primary"></i>
          <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>4 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"></hr>
        </li>
        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>

      </ul>

    </li>

    

    <li className="nav-item dropdown pe-3">

      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
        <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"></img>
        <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Kevin Anderson</h6>
          <span>Web Designer</span>
        </li>
        <li>
          <hr className="dropdown-divider"></hr>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i className="bi bi-person"></i>
            <span>Mon Profile</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"></hr>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"></hr>
        </li>

       
        <li>
          <hr className="dropdown-divider"></hr>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-box-arrow-right"></i>
            <span>déconnecter</span>
          </a>
        </li>

      </ul>
    </li>

  </ul>
</nav>
<aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <a className="nav-link " href="index.html">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="ajouterchef">
          <i className="bi bi-menu-button-wide"></i><span>Chef chantier</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="Ajouter">
              <i className="bi bi-circle"></i><span>Ajouter</span>
            </a>
          </li>
          <li>
            <a href="modifier">
              <i className="bi bi-circle"></i><span>Modifier</span>
            </a>
          </li>
          <li>
            <a href="surrprimer">
              <i className="bi bi-circle"></i><span>Surrprimer</span>
            </a>
          </li>
          
          
          
          
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="Ajouterchef">
          <i className="bi bi-menu-button-wide"></i><span>Service</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
          <a  href="ajouterse">
              <i className="bi bi-circle"></i><span>Ajouter</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-circle"></i><span>Modifier</span>
            </a>
          </li>
          <li>
            <a href="components-badges.html">
              <i className="bi bi-circle"></i><span>Surrprimer</span>
            </a>
          </li>
          
          
          
          
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="Ajouterchef">
          <i className="bi bi-menu-button-wide"></i><span>Reservation</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
          <a  href="accepter">
              <i className="bi bi-circle"></i><span>Accepter</span>
            </a>
          </li>
          <li>
            <a href="refuser">
              <i className="bi bi-circle"></i><span>Refuser</span>
            </a>
          </li>
          <li>
            <a href="consulter">
              <i className="bi bi-circle"></i><span>consulter</span>
            </a>
          </li>
          
          
          
          
        </ul>
      </li>
      </ul>

  </aside>

</header>
<main id="main" className="main">

    <div className="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    <section className="section dashboard">
      <div className="row">

       
        <div className="col-lg-12">
          <div className="row">

         
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">

               

                <div className="card-body">
                  <h5 className="card-title">Sales <span>| Today</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-cart"></i>
                    </div>
                    <div className="ps-3">
                      <h6>145</h6>
                      <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">

               

                <div className="card-body">
                  <h5 className="card-title">Revenue <span>| This Month</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                    <div className="ps-3">
                      <h6>$3,264</h6>
                      <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>

        
            <div className="col-xxl-4 col-xl-12">

              <div className="card info-card customers-card">

                

                <div className="card-body">
                  <h5 className="card-title">Customers <span>| This Year</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people"></i>
                    </div>
                    <div className="ps-3">
                      <h6>1244</h6>
                      <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>

                    </div>
                  </div>

                </div>
              </div>

            </div>

      
            <div className="col-12">
              <div className="card">

                

                <div className="card-body">
                  <h5 className="card-title">Reports <span>/Today</span></h5>

                 
                  <div id="reportsChart"></div>

                  
                  

                </div>

              </div>
            </div>

            
            <div className="col-12">
              <div className="card recent-sales overflow-auto">

                


              </div>
            </div>


            
            <div className="col-12">
              <div className="card top-selling overflow-auto">

               

                

              </div>
            </div>

          </div>
        </div>

    

      </div>
    </section>

</main>
<footer id="footer" className="footer">
    <div className="copyright">
      &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
     
      Designed by 
    </div>
  </footer>
  <Routes>
 <Route path="/Ajouter" element={<Ajouterchef />} />
 <Route path="/modifier" element={<Modifierchef />} />
 <Route path="/surrprimer" element={<Surrprimerchef />} />
 <Route path="/ajouterse" element={<Addservice />} />
 <Route path="/consulter" element={<Reservation />} />
 <Route path="/accepter" element={<Ajoutres />} />
    </Routes>
  

</div>

);
}
export default Template;