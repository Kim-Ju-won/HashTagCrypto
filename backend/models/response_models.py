from typing import Dict

from pydantic import BaseModel


# 📊 차트 데이터
class ChartData(BaseModel):
    time: str
    mentions: int
    volume: int


# 😨 투자심리
class SentimentData(BaseModel):
    fearGreedIndex: int


# 🔑 키워드
class KeywordData(BaseModel):
    word: str
    weight: float


# 📑 리포트
class ReportData(BaseModel):
    type: str  # "positive" | "negative"
    text: str


# ✅ 성공 응답
class AnalyzeSuccessResponse(BaseModel):
    success: bool = True
    coin: str
    data: Dict[str, object]


# ❌ 코인 없음
class AnalyzeNotFoundResponse(BaseModel):
    success: bool = False
    coin: str
    error: Dict[str, str]


# ❌ 서버 오류
class AnalyzeErrorResponse(BaseModel):
    success: bool = False
    error: Dict[str, str]
