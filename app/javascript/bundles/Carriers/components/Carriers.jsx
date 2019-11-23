import React from 'react'
import CarriersTable from './CarriersTable'

export default class Carriers extends React.Component {
    state = {
        carrierRates: this.props.shipment.rates,
        customCarrierRates: [],
        carrierName: [],
        services: [],
        selectedService: []
    }

    componentDidMount() {
        this.getCarriers()
        this.customCarrierRates()
    }

    getCarriers = () => {
        const uniqCarriers = this.state.carrierRates.map(c => { return c.carrier })
        const filterCarriers = uniqCarriers.filter(function (car, index) {
            return uniqCarriers.indexOf(car) === index
        })
        this.setState({ carrierName: filterCarriers })
    }

    customCarrierRates = () => {
        const carrierRates = this.state.carrierRates
        const mapCustomCarrierRates = carrierRates.map(carrier => {
            return ({
                carrier: carrier.carrier,
                service: carrier.service,
                rate: carrier.rate
            })
        })
        this.setState({ customCarrierRates: mapCustomCarrierRates })
    }

    handleOptionChange = e => {
        const option = e.target.value
        this.setState({ selectedService: [option] })
    }

    render() {
        const { carrierRates, carrierName, customCarrierRates, selectedService } = this.state
        return (
            <>
                <div className="carriers-header">
                    <div className="carriers-header-logo">
                        <span>LOGO</span>
                    </div>
                    <div className="carriers-header-header">
                        <h1>SELECT A CARRIER</h1>
                    </div>
                </div>

                <main className="carriers-main">
                    <CarriersTable
                        carrierName={carrierName}
                        carrierRates={carrierRates}
                        customCarrierRates={customCarrierRates}
                        handleOptionChange={this.handleOptionChange}
                        selectedService={selectedService}
                    />
                </main>
                <section className="carriers-section-footer">

                </section>

                {/* <h1>Carriers JSX</h1>
                {this.props.shipment.buyer_address.street1} */}
            </>
        )
    }
}