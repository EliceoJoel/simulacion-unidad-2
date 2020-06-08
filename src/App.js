import React, { Component } from 'react'

let tabla = []

class App extends Component {
  constructor() {
    super()
    this.state = { 
      a : 0,
      c : 0,
      m : 0,
      semilla : 0,
      tabla : []
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  generar(){
    tabla = []
    let a = parseFloat(this.state.a)
    let c = parseFloat(this.state.c)
    let m = parseFloat(this.state.m)
    let s = parseFloat(this.state.semilla)
    let iguales = 0
    let dato = {}
    let n = 0

    dato.n = n
    dato.Xn = s
    dato.AXn = a*s
    dato.AXnC = a*s+c
    dato.Xn1 = (a*s+c)%m
    dato.Un1 = ((a*s+c)%m)/m
    tabla.push(dato)
    n++ 

    while(iguales<3){ 
      let datos ={}
      let Xn = tabla[n-1].Xn1
      let AXn = a*Xn
      let AXnC = a*Xn+c
      let Xn1 = (a*Xn+c)%m
      let Un1 = Xn1 / m
      datos.n = n
      datos.Xn = Xn
      datos.AXn = AXn
      datos.AXnC = AXnC
      datos.Xn1 = Xn1
      datos.Un1 = Un1
      tabla.push(datos)
      n++
      if (tabla[0].Xn === datos.Xn && tabla[0].AXn === datos.AXn && tabla[0].AXnC === datos.AXnC && tabla[0].Xn1 === datos.Xn1 && tabla[0].Un1 === datos.Un1) {
        iguales++;
      }
    }

    this.setState({tabla:tabla})
  }

  render() {
    return (
      <div>
        <div className="p-3 mb-2 bg-success text-white text-center h3">Proyecto de unidad 2 de simulación de sistemas</div>
        <div className="container mt-5">
          <form>
            <div className="h4 mb-3 text-center">Configurar formula</div>
            <div className="row">
              <div className="col-md-4 text-center">
                <label htmlFor="a"><b>a</b></label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Introduzca la variable a"
                  name="a"
                  min="0"
                  value={this.state.a}
                  onChange={this.onChange}
                  />
              </div>
              <div className="col-md-4 text-center">
                <label htmlFor="c"><b>c</b></label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Introduzca la variable c"
                  name="c"
                  min="0"
                  value={this.state.c}
                  onChange={this.onChange}
                  />
              </div>
              <div className="col-md-4 text-center">
                <label htmlFor="m"><b>m</b></label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Introduzca la variable m"
                  name="m"
                  min="0"
                  value={this.state.m}
                  onChange={this.onChange}
                  />
              </div>
              <div className="mx-auto border border-success text-center mt-4 py-3 rounded" style={{width: "400px"}}>
                {"Xn+1 = ("+this.state.a+"Xn + "+this.state.c+") mod"+this.state.m}
              </div>
            </div>
            <div className="h4 mt-5 text-center">Calculo de datos</div>
            <div className="row">
              <div className="mx-auto text-center my-4 col-md-4" style={{width: "400px"}}>
                <label htmlFor="dato"><b>Dato semilla</b></label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Introduzca el dato semilla"
                  name="semilla"
                  min="0"
                  value={this.state.semilla}
                  onChange={this.onChange}
                  />
                  <button type="button" className="btn btn-success btn-block mt-3" onClick={()=>this.generar()}>Generar tabla</button>
              </div> 
            </div>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">n</th>
                  <th scope="col">Xn</th>
                  <th scope="col">AXn</th>
                  <th scope="col">AXn+C</th>
                  <th scope="col">Xn+1</th>
                  <th scope="col">Un+1</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tabla.map(tab =>(
                <tr key = {tab.n}>
                  <th scope="row">{tab.n}</th>
                  <td>{tab.Xn}</td>
                  <td>{tab.AXn}</td>
                  <td>{tab.AXnC}</td>
                  <td>{tab.Xn1}</td>
                  <td>{tab.Un1}</td>
                </tr>
                ))}
                <tr>
                  <th scope="row">...</th>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    )
  }
}

export default App

