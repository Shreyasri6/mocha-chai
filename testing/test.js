let mongoose = require("mongoose");
let Book = require("./user/model");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("./index");
let should = chai.should();

chai.use(chaiHttp);

//Our parent block

describe("/GET USER", () => {
  it("it should GET all the books", (done) => {
    chai
      .request(server)
      .get("/user/detail")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");

        done();
      });
  });
});

describe("/POST book", () => {
  it("it should not POST a book without pnumber field", (done) => {
    let user = {
      name: "Khushi",
      department: "mean",
    };
    chai
      .request(server)
      .post("/user")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("errors");
        res.body.errors.should.have.property("pnumber");
        done();
      });
  });
});
