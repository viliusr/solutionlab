const React = require('react')

const style = {}

class Main extends React.Component {

  constructor() {
    super()
    this.state = { questions: null }
    this.getProducts = this.getProducts.bind(this)
  }

  getProducts() {
    return this.props.api.getProducts().then(questions => {
      this.setState({ questions })
    })
  }

  componentWillMount() {
    return this.getProducts()
  }

  render() {
    return (
      <div>
        OK n
      </div>
    )
  }

}

module.exports = Main