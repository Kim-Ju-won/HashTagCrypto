# 1. Python 3.11-slim 기반 이미지
FROM python:3.11-slim

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. pyproject.toml 복사 (없어도 괜찮음)
COPY pyproject.toml ./

# 4. pip 최신화 + 주요 패키지 설치
RUN pip install --upgrade pip
RUN pip install "litestar[standard]" supabase python-dotenv uvicorn

# 5. 소스 복사
COPY . /app

# 6. Fly.io 포트 설정
ENV PORT=8080

# 7. 애플리케이션 실행
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8080"]