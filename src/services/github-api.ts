export const githubApiService = {
  fetchRepoInfo: async function ({ repo }: { repo: string }) {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Authorization: `Bearer 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`
      }
    })

    switch (response.status) {
      case 401: {
        const error = new Error()
        error.message = 'The token provides is invalid or has been revoked'
        error.cause = 401
        throw error
      }

      case 403: {
        if (response.headers.get('X-RateLimit-Remaining') === '0') {
          const error = new Error()
          error.message = 'The token provides has reached the limit of requests'
          error.cause = 403
          throw error
        }
        break
      }

      case 404: {
        const error = new Error()
        error.message = `The repository you are looking for does not exist. "${repo}"`
        error.cause = 404
        throw error
      }
    }

    if (!response.ok) {
      const error = new Error()
      error.message = 'Could not obtain the repository data from Github API'
      error.cause = response.status
      throw error
    }

    return response.json()
  }
}
