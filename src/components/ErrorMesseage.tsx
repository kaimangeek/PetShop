interface ErrorMesseageProps {
    error: string
}

export function ErrorMesseage({error}: ErrorMesseageProps){
    return (
        <p className='text-center text-red-600'>{error}</p>
    )
}
