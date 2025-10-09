from typing import Union

from litestar import Router, post
from models.request_models import AnalyzeRequest
from models.response_models import (
    AnalyzeErrorResponse,
    AnalyzeNotFoundResponse,
    AnalyzeSuccessResponse,
)
from services.analyze_service import AnalyzeService

# ✅ 서비스 인스턴스 생성
service = AnalyzeService()


@post("/analyze", tags=["Crypto Analysis"])
async def analyze_endpoint(
    data: AnalyzeRequest,
) -> Union[AnalyzeSuccessResponse, AnalyzeNotFoundResponse, AnalyzeErrorResponse]:
    """
    암호화폐 데이터 분석 API 엔드포인트
    """
    try:
        result = await service.process_request(data)

        if result is None:
            return AnalyzeNotFoundResponse(
                coin=data.coin,
                error={
                    "code": "COIN_NOT_FOUND",
                    "message": "해당 코인을 찾을 수 없습니다.",
                },
            )

        return AnalyzeSuccessResponse(coin=data.coin, data=result)

    except Exception as e:
        return AnalyzeErrorResponse(
            error={
                "code": "SERVER_ERROR",
                "message": str(e) or "일시적인 오류가 발생했습니다.",
            }
        )


# ✅ Router 등록
analyze_router = Router(path="/", route_handlers=[analyze_endpoint])
