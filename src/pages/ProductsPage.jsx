import { useEffect, useState } from "react"

export default function Products() {

    const url = 'https://fakestoreapi.com/products'
    const [productData, setProductData] = useState([{
        id: null,
        title: '',
        price: null,
        description: '',
        category: '',
        image: '',
        rating: {
            rate: null,
            count: null
        }
    }])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProductData(data)
            })
    }, [])
    console.log(productData);

    return (
        <>
            <main>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                        {

                        }
                        <div className="col">
                            <div className="product-card">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" className="card-img-top" alt="Product Image" />
                                <div className="card-body">
                                    <h5 className="card-title">Red Nike</h5>
                                    <p className="card-text">Short product description goes here.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="h5 mb-0">$99.99</span>
                                        <div>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-half text-warning"></i>
                                            <small className="text-muted">(4.5)</small>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between bg-light">
                                        <button className="btn btn-primary btn-sm">Add to Cart</button>
                                        <button className="btn btn-outline-secondary btn-sm">
                                            <i className="bi bi-heart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}