from litestar import Litestar
from litestar.config.cors import CORSConfig
from routes.analyze import analyze_router


def create_app() -> Litestar:
    # ✅ CORS 설정 추가
    cors_config = CORSConfig(
        allow_origins=["*"],  # 개발 단계에서는 모든 origin 허용
        allow_methods=["GET", "POST", "OPTIONS"],  # 브라우저 preflight 대응
        allow_headers=["*"],  # Content-Type, Authorization 등 허용
        allow_credentials=False,  # 인증/쿠키 필요 시 True로 변경 가능
    )

    return Litestar(
        route_handlers=[analyze_router],
        debug=True,
        cors_config=cors_config,  # ✨ 여기 추가됨
    )


app = create_app()
