import Home from '../components/Home'
import {addToCart,removeToCart} from '../Services/Actions/actions'
import {connect} from 'react-redux'

const mapStatetoProps=state=>({
    data:state.cardItems

})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart())

})

export default connect(mapStatetoProps,mapDispatchToProps)(Home)