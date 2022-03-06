import React from "react"

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            purchase_price:0,
            down_payment:0,
            repayment_time:0,
            interest_rate:0
        }

    }
    render(){
        return(
            <>
                <h1 className="mt-3 text-center p-4">
                    Mortgage Calculator
                </h1>
                <div className="container fs-4">
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        this.props.convert(this.state.purchase_price,this.state.down_payment,this.state.repayment_time,this.state.interest_rate)
                    }}>
                        <div className="mb-3 row">  
                            <div className="col">
                                <label htmlFor="purchaseprice">Purchase Price: <span className="badge bg-secondary">{this.state.purchase_price}</span></label>
                                <input type="range" name="purchaseprice" className="form-range" id="purchaseprice" min="0" step="5000" max="1000000" onChange={(e)=>{this.setState({purchase_price:e.currentTarget.value})}} value={this.state.purchase_price} />
                            </div>
                            <div className="col">
                                <label htmlFor="downpayment">Down Payment: <span className="badge bg-secondary">{this.state.down_payment}</span></label>
                                <input type="range" name="downpayment" className="form-range" id="downpayment" min="0" step="5000" max="1000000" onChange={(e)=>{this.setState({down_payment:e.currentTarget.value})}} value={this.state.down_payment} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col">
                                <label htmlFor="repaymenttime">Repayment Time: <span className="badge bg-secondary">{this.state.repayment_time} years</span></label>
                                <input type="range" name="repaymenttime" className="form-range" id="repaymenttime" min="0" step="5" onChange={(e)=>{this.setState({repayment_time:e.currentTarget.value})}} value={this.state.repayment_time} />
                            </div>
                            <div className="col">
                                <label htmlFor="interestrate">Interest Rate: <span className="badge bg-secondary">{this.state.interest_rate} %</span></label>
                                <input type="range" name="interestrate" className="form-range" id="interestrate" min="0" step="1" onChange={(e)=>{this.setState({interest_rate:e.currentTarget.value})}} value={this.state.interest_rate} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Calculate</button>
                        <div className="mb-3">
                            <label htmlFor="loanamount" className="form-label p-2">Loan Amount:</label>
                            <input className="form-control" type="text" id="loanamount" value={this.props.m} aria-label="readonly input example" readOnly/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="estimatedprmonth" className="form-label p-2">Estimated pr. month:</label>
                            <input className="form-control" type="text" id="estimatedprmonth" value={this.props.q} aria-label="readonly input example" readOnly/>
                        </div>
                    </form>
                </div>   
            </>
        )
    }
}
export default Form
