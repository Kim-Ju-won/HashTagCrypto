from db.supabase_client import supabase
from models.request_models import AnalyzeRequest


class AnalyzeService:
    async def process_request(self, request: AnalyzeRequest):
        # 실제 구현 시: Supabase 쿼리 or 외부 API 호출
        # 예시로 Mock 데이터 반환
        if request.coin not in ["BTC", "ETH", "SOL"]:
            return None

        mock_data = {
            "chart": [
                {"time": "10:00", "mentions": 120, "volume": 340},
                {"time": "11:00", "mentions": 200, "volume": 420},
            ],
            "sentiment": {"fearGreedIndex": 65},
            "keywords": [
                {"word": "ETF", "weight": 1.0},
                {"word": "halving", "weight": 0.7},
            ],
            "reports": [
                {"type": "positive", "text": "BTC ETF 기대감이 상승장을 주도 중."},
                {"type": "negative", "text": "SEC 결정 지연으로 단기 조정 가능성."},
            ],
        }

        # 요청한 metrics만 필터링
        if request.metrics:
            return {m: mock_data[m] for m in request.metrics if m in mock_data}

        return mock_data
