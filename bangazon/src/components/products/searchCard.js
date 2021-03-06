import React, { Component } from 'react';
import { Link } from "react-router-dom";

//CARDS
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./Product.css"
import "../home/Home.css"


class SearchCard extends Component {

    render() {

        return (
            <Card className="product-list-card home-card">
                <CardContent>
                    <img
                      style={{height: '75px'}}
                      src={this.props.imagePath}
                      title={this.props.name}
                      alt="Product"
                    />
                    <Typography variant="h5" component="h2">
                        <Link to={`/Product/${this.props.product.id}`} className="product-link">{this.props.name}</Link>
                    </Typography>
                    <Typography color="textSecondary">
                        Price: ${this.props.price}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}
export default SearchCard;