import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  try {
    return NextResponse.json(
      {
        message: 'Workin api route',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Internal server error',
      },
      {
        status: 500,
      }
    );
  }
}
