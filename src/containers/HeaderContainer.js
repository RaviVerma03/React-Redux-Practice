import Header from '../components/Header'
import {connect} from 'react-redux'

const mapStatetoProps=state=>({
    data:state.cardItems

})
const mapDispatchToProps=dispatch=>({
})

export default connect(mapStatetoProps,mapDispatchToProps)(Header)