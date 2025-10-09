from litestar import Litestar
from routes.analyze import analyze_router


def create_app() -> Litestar:
    return Litestar(
        route_handlers=[analyze_router],
        debug=True,
    )


app = create_app()
