from typing import List, Optional

from pydantic import BaseModel, Field


class AnalyzeRequest(BaseModel):
    coin: str = Field(..., description="조회할 코인 심볼 (예: BTC, ETH, SOL)")
    range: Optional[str] = Field(
        default="24h", description="데이터 분석 구간 (예: 1h, 24h, 7d)"
    )
    metrics: Optional[List[str]] = Field(default=None, description="가져올 데이터 종류")
