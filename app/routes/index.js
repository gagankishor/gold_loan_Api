const { default: AddressControler } = require("../controllers/AddressControler");
const { default: GoldLoanController } = require("../controllers/GoldLoanController");
const { default: KycUpdateController } = require("../controllers/KycUpdateController");
const { default: UserController } = require("../controllers/UserController");


const routes =(app) =>{
    app.get("/api/kycupdate", KycUpdateController.index);
    app.post("/api/kycupdate", KycUpdateController.store);
    app.get("/api/kyc/:id", KycUpdateController.onedata);
    app.put("/api/kyc/:id", KycUpdateController.update); 

    // app.get("/api/kycupdateasd", KycUpdateController.index1);
    
    app.get("/api/goldloan", GoldLoanController.index);
    app.post("/api/goldloan", GoldLoanController.store);
    app.get("/api/goldloan/:id", GoldLoanController.onedata);
    app.put("/api/goldloan/:id", GoldLoanController.update); 

    app.post("/api/alluser", UserController.store);
    app.post("/api/alluser", UserController.store);
    app.get("/api/state", AddressControler.stateindex);
    app.post("/api/state", AddressControler.statestore);
    app.get("/api/city", AddressControler.cityindex);
    app.post("/api/city", AddressControler.citystore);



};
exports.default = {
    routes,
};
  
  
