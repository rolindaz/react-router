export default function SingleProductPage() {
    return (
        <div key={product.id} className="col">
            <div className="product-card h-100 d-flex flex-column p-4">
                <div className="img-wrap">
                    <img src={product.image} className="card-img-top p-4" alt={product.title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title py-2">
                        {product.title}
                    </h5>
                    <p className="card-text">
                        {product.description}
                    </p>
                </div>
                <div className="product-info pt-2 d-flex flex-column row-gap-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 mb-0">
                            $ {product.price}
                        </span>
                        <div>
                            <i className="bi bi-star-fill text-warning"></i>
                            <small className="text-muted">
                                {product.rating.rate}
                            </small>
                            <small className="text-muted">
                                ({product.rating.count})
                            </small>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light">
                        <button className="btn btn-primary btn-sm">
                            Add to Cart
                        </button>
                        <button className="btn btn-outline-secondary btn-sm">
                            <i className="bi bi-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}